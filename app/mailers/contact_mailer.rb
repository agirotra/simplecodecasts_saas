class ContactMailer < ActionMailer::Base
    default to: 'abhinav.girotra@gmail.com'
    
    def contact_email(name, email, body)
        @name = name
        @email = email
        @body = body 
        
        mail(from: email, subject: 'Ruby Contact Form Message')
    end
    

end
