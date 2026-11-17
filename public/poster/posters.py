"""Buat poster price list per layanan dengan gaya yang sama seperti nailart.html.

Bagian atas (ornamen, pita, logo) dan bawah (tombol WA, alamat) diambil dari nailart.html,
bagian tengah (judul, foto, card harga) dari data di bawah.

Pakai:  python posters.py          -> tulis <slug>.html lalu render pricelist-<slug>.png
"""
import pathlib, subprocess, sys

HERE = pathlib.Path(__file__).parent
base = (HERE / 'nailart.html').read_text(encoding='utf-8')
top = base[:base.index('  <div class="kicker">')]
bottom = base[base.index('  <div class="cta">'):]

EXTRA_CSS = '''
  .photo { position:relative; width:var(--hero,300px); height:var(--hero,300px); margin-top:12px; }
  .photo .ring { position:absolute; inset:0; }
  .photo .pic { position:absolute; inset:14%; border-radius:50%; overflow:hidden; box-shadow:0 0 0 6px #5a1120, 0 0 0 9px #f4d9da, 0 0 0 10.5px #c5a14a; }
  .photo .pic img { width:100%; height:100%; object-fit:cover; }
  .pkg h3 .price { margin-left:auto; font-family:'Playfair Display',serif; font-size:44px; color:var(--gold); }
  .pkg h3 .price sup { font-size:22px; vertical-align:top; }
  .pkg h3 .price em { font-style:normal; font-family:'Plus Jakarta Sans',sans-serif; font-size:15px; font-weight:700; letter-spacing:.15em; color:var(--muted); margin-right:8px; vertical-align:middle; }
  .card.blush.pkg h3 .price { color:var(--maroon); }
  .card.blush.pkg h3 .price em { color:#6b2a37; }
  .chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:12px; }
  .chips span { font-size:21px; padding:7px 18px; border-radius:999px; border:1px solid #c5a14a66; color:var(--muted); }
  .card.blush .chips span { border-color:#5a112040; color:#6b2a37; background:#ffffff66; }
'''
top = top.replace('</style>', EXTRA_CSS + '</style>')


def price(v):
    # '500' -> 500K, '1,5jt' -> 1,5JT
    if v.endswith('jt'):
        return f'{v[:-2]}<sup>JT</sup>'
    return f'{v}<sup>K</sup>'


def card(c):
    cls = 'card' + (' blush' if c.get('featured') else '') + (' pkg' if 'price' in c else '')
    tag = f'<span class="tag">{c["tag"]}</span>' if c.get('tag') else ''
    if 'price' in c:  # kartu paket: harga besar di judul + chip isi paket
        head = f'<h3><span class="ic">✿</span>{c["title"]}<span class="price"><em>{c.get("from", "")}</em>{price(c["price"])}</span></h3>'
        body = '<div class="chips">' + ''.join(f'<span>{x}</span>' for x in c['chips']) + '</div>'
    else:  # kartu daftar: baris dengan titik penuntun
        head = f'<h3><span class="ic">✿</span>{c["title"]} <small>{c.get("note", "")}</small></h3>'
        body = ''.join(f'<div class="row"><span class="l">{l}</span><span class="dots"></span><span class="p">{price(p)}</span></div>' for l, p in c['rows'])
    return f'<div class="{cls}">{tag}{head}{body}</div>'


def pic(d):
    if d.get('fit') == 'contain':  # foto utuh + latar blur dari foto yang sama
        return (f'<img src="{d["photo"]}" style="position:absolute;inset:0;filter:blur(14px) brightness(.8);transform:scale(1.2)" alt="">'
                f'<img src="{d["photo"]}" style="position:relative;object-fit:contain" alt="">')
    pos = d.get("pos", "center")
    return f'<img src="{d["photo"]}" style="object-position:{pos}; transform:scale({d.get("zoom", 1)}); transform-origin:{pos}" alt="">'


def poster(d):
    ring = d['ring']
    middle = f'''  <div class="kicker">PRICE LIST</div>
  <h1>{d["title"]}</h1>
  <h2>{d["sub"]}</h2>
  <div class="divider"><i></i>♥<i></i></div>

  <div class="photo" style="--hero:{d.get("hero", 300)}px">
    <svg class="ring" viewBox="0 0 200 200">
      <defs><path id="r" d="M100,100 m-93,0 a93,93 0 1,1 186,0 a93,93 0 1,1 -186,0"/></defs>
      <text fill="#f4d9da" font-family="Plus Jakarta Sans" font-weight="800" font-size="7.5" letter-spacing="2">
        <textPath href="#r" textLength="580" lengthAdjust="spacing">{ring}</textPath>
      </text>
    </svg>
    <div class="pic">{pic(d)}</div>
  </div>

  <div class="cards">
    {"".join(card(c) for c in d["cards"])}
  </div>

'''
    return top + middle + bottom


POSTERS = {
    'mua-pengantin': dict(
        title='Bridal', sub='MAKEUP PENGANTIN', photo='foto/makeup.jpg', pos='50% 42%', zoom=1.25, hero=560,
        ring='CANTIK DI HARI BAHAGIAMU ♥ IMELDA SALON ♥',
        cards=[
            dict(title='Makeup Lamaran', price='500', chips=['Rias wajah natural', 'Setting rambut', 'Touch up', 'Konsultasi look']),
            dict(title='Makeup Pengantin', price='1,5jt', chips=['Rias wajah pengantin', 'Sanggul modern / tradisional', 'Touch up kit', 'Konsultasi gratis']),
            dict(title='Makeup Adat Batak', price='2jt', featured=True, tag='PALING DIMINATI ♥',
                 chips=['Rias wajah adat', 'Sanggul adat lengkap', 'Aksesoris tradisional', 'Touch up kit premium']),
        ]),
    'hairdo-wedding': dict(
        title='Hairdo', sub='WEDDING & PESTA', photo='foto/hairdo.jpg', pos='60% 50%', zoom=1.1, hero=590,
        ring='SANGGUL CANTIK TAHAN SEHARIAN ♥ IMELDA SALON ♥',
        cards=[
            dict(title='Hairdo Pesta', price='200', chips=['Glamor', 'Modern', 'Elegan']),
            dict(title='Hairdo Bridesmaid', price='250', chips=['Serasi dengan pengantin', 'Natural', 'Cepat']),
            dict(title='Hairdo Pengantin', price='800', featured=True, tag='FAVORIT ♥', chips=['Tahan lama', 'Aksesoris', 'Trial session']),
        ]),
    'potong-styling': dict(
        title='Hair Care', sub='POTONG & STYLING', photo='foto/haircare.jpg', fit='contain', hero=560,
        ring='RAMBUT SEHAT TAMPIL MEMIKAT ♥ IMELDA SALON ♥',
        cards=[
            dict(title='Potong & Perawatan', note='HAIR CARE', rows=[('Hair Cut & Styling', '15–30'), ('Creambath & Hair Spa', '50–100')]),
            dict(title='Smoothing / Rebonding', note='LURUS BERKILAU', featured=True, tag='BEST SELLER ♥', rows=[('Mulai dari', '150–500')]),
            dict(title='Warna Rambut', note='COLORING', rows=[('Hair Coloring', '50–100'), ('Ombre / Highlight', '100–200')]),
        ]),
}

# harga paket diawali "mulai" (sesuai halaman layanan)
for d in POSTERS.values():
    for c in d['cards']:
        if 'price' in c:
            c.setdefault('from', 'MULAI')

if __name__ == '__main__':
    for slug, d in POSTERS.items():
        html = HERE / f'{slug}.html'
        html.write_text(poster(d), encoding='utf-8')
        subprocess.run([sys.executable, str(HERE / 'render.py'), str(html), str(HERE / f'pricelist-{slug}.png')], check=True)
