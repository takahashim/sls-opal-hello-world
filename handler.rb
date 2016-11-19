require 'json'

class Handler
  def call(event)
    [200,
     {'Content-Type' => 'text/plain'},
     [
       JSON.generate(message: 'Go Serverless v1.0! Your function executed successfully!',
                     input: event)
     ]
    ]
  end
end
