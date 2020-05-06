import tempita

def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])

    #if environ['PATH_INFO'] != "/":
        #return ["Cannot ", environ['REQUEST_METHOD'], " ", environ['PATH_INFO']]
        #return [", ".join(["{0} => {1}".format(key, val) for key, val in environ.items()])]

    return ['Hello World!']