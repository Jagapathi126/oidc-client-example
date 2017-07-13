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
    "client_id": "6ff7dfad-5ae8-4c88-bec5-c7758c3ba2ff",
    "client_id_issued_at": 1499943041,
    "client_secret": "X+YvHlxPA+hEZoY1LX+86jR8fHwpvGnX4ly/NqIFWoIAIPd5GvbVmFtTKpQAcJWu",
    "client_secret_expires_at": 0,
    "redirect_uris": [
        "http://localhost:3001/cb"
    ],
    "registration_client_uri": "http://10.0.2.165:3000/reg/6ff7dfad-5ae8-4c88-bec5-c7758c3ba2ff",
    "registration_access_token": "Njk1YzhmYWItZjQ0ZC00NmQxLTgzZjYtNGYzY2NjOTg0YTJm_m5kbIUza91i0ZmR7etFIyVcxVBxw4KO5i31gwzwVImPNUKIk5shYE7-ZmUUiaBii6q54zlLb_S2HI_UCaDRJQ"
};


module.exports = {
    client
}