$(document).ready(function() { 
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    //Watch for a form - submission
    $("#form-submit-btn").click(function(event) {
        event.preventDefault();
        $('input[type=submit]').prop('disabled', true);
        var error=false;
        var ccNum=$('#card_num').val(),
            cvcNum=$('#card_code').val(),
            expMonth=$('#card_month').val(),
            expYear=$('#card_year').val();
        
        if(!error) {
            // Get the Stripe Token
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month:expMonth,
                exp_year: expYear
                }, stripeResponseHandler); //stripe create token
            } //error if
            return false;
    }); //form submission
    
    function stripResponseHandler(status, response) {
        //get a reference to the form
        var f= $("#new-user");
        
        //get the token from response
        var token = response.id;
        
        //add the token to the form
        f.append('<input type="hidden" name="user[stripe_card_token]" value"' + token +'"/>');
        
        //submit the form
        f.get(0).submit();
    }
});