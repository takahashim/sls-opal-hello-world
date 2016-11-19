require 'json'

class Hello
  def self.handler(event)
    response = {
      statusCode: 200,
      body: JSON.generate(
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      )
    }

    # Use this code if you don't use the http event with the LAMBDA-PROXY integration
    # response = {
    #   message: 'Go Serverless v1.0! Your function executed successfully!',
    #   event: event
    # }

    response
  end
end
