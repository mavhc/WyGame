from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.request, mimetypes
import time, os.path

hostName = "localhost"
hostPort = 9000
webRoot = "./web"
sep = "/"
class WyServer(BaseHTTPRequestHandler):
    def guess_type(self, path):
        mimetype = SimpleHTTPServer.SimpleHTTPRequestHandler.guess_type(
            self, path
            )
        if mimetype == 'application/octet-stream':
            if path.endswith('manifest'):
                mimetype = 'text/cache-manifest'
        return mimetype
    def do_GET(s):
        if s.path=="/":
            s.path="/index.html"
        try:
            """Respond to a GET request."""
            print(webRoot+s.path)
            print(os.getcwd())
            pathname = webRoot+s.path
            f = open(pathname, 'rb')
            url = urllib.request.pathname2url(pathname)
            s.send_response(200)
            s.send_header("Content-type", mimetypes.guess_type(url)[0])
            s.end_headers()
            s.wfile.write(f.read())
            f.close()
            # If someone went to "http://something.somewhere.net/foo/bar/",
            # then s.path equals "/foo/bar/".
        except IOError:
            s.send_error(404,'File Not Found: %s' % s.path)

if __name__ == '__main__':
    wyServer = HTTPServer((hostName, hostPort), WyServer)
print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

try:
    wyServer.serve_forever()
except KeyboardInterrupt:
    pass

wyServer.server_close()
print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))