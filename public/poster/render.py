"""Render poster HTML ke PNG 1080x1920.

Pakai:  python render.py nailart.html pricelist-nailart.png
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

html_path, out_path = pathlib.Path(sys.argv[1]).resolve(), sys.argv[2]

with sync_playwright() as p:
    b = p.chromium.launch(channel='chrome')
    pg = b.new_page(viewport={'width': 1080, 'height': 1920})
    # buka sebagai file agar path relatif (logo, foto) ikut termuat
    pg.goto(html_path.as_uri(), wait_until='networkidle')
    pg.evaluate('document.fonts.ready')
    pg.wait_for_timeout(500)
    pg.screenshot(path=out_path)
    b.close()
print('saved', out_path)
