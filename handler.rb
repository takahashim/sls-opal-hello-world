require 'native'
class Hello
  def call(env)
    [200,
     {'Content-Type' => 'text/plain'},
     [
       "message: Hello",
       "env: #{env.to_s}"
     ]
    ]
  end
end
