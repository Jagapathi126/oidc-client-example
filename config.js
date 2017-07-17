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
    "client_id": "539337e6-7558-4039-ab71-090cd588ab7e",
    "client_id_issued_at": 1500045073,
    "client_secret": "gJfCb764epZLzIKjgS/DgaB+5FpkuSOSEHEM3wZNONMQNqnow2rBQ/FACHTdPid1",
    "client_secret_expires_at": 0,
    "redirect_uris": [
        "http://rs1.local.com:3001/cb",
        "http://rs2.local.com:3002/cb"
    ],
    "registration_client_uri": "http://10.0.2.165:3000/reg/539337e6-7558-4039-ab71-090cd588ab7e",
    "registration_access_token": "Njc3ZmJiNTEtODM4Zi00Y2EwLWFkM2EtODliZTdjM2Q2YzIzt9gNiytg180EFLn45GN6C1BgzCuVb5yQh7fnW0fSesrrG-Ky2JZB3zphhYY-Zfa1awHxIAnewD1fpN6NrujKeQ"
};


module.exports = {
    client
}