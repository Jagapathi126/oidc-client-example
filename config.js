const client = {
    "application_type": "web",
    "backchannel_logout_session_required": false,
    "grant_types": [
        "authorization_code"
    ],
    "id_token_signed_response_alg": "RS256",
    "post_logout_redirect_uris": [],
    "require_auth_time": false,
    "response_types": [
        "code"
    ],
    "subject_type": "public",
    "token_endpoint_auth_method": "client_secret_basic",
    "client_id": "2dbe4ec0-3e1b-4633-9743-0d203c1b20cf",
    "client_id_issued_at": 1499949187,
    "client_secret": "FRaVvzVOcVIClQ//mpk2Un10bGF9AFgi2RpyxX8B3GjwUvttpqA/YSVx6RYjN7pA",
    "client_secret_expires_at": 0,
    "redirect_uris": [
        "http://localhost:3001/cb",
        "http://localhost:3002/cb"
    ],
    "registration_client_uri": "http://10.0.2.165:3000/reg/2dbe4ec0-3e1b-4633-9743-0d203c1b20cf",
    "registration_access_token": "NDZiY2M5ZmQtYjQ1Mi00MWNlLThjYWMtM2FmOGVhMTRlOWVk6iMGMfTPRH6JKX93aTcgnGOqeepeHhKQQ4gUSrMNFBOBTPh62-ze9ewI3hDNy_oJjPfRp9BVnoqq3Tdm2XLpIw"
};


module.exports = {
    client
}