<?php
// Endpoint URL
$url = 'https://api.promotexter.com/api/batchsms';

// Payload
$data = [
    "apiKey" => "pMeR_C85h-VlDRjZPafQrxYA5qVQA",
    "apiSecret" => "Qr7gdpdOjJ6OVb7tn0RKFYTIK8EAc",
    "messages" => [
        [
            "from" => "<senderId>",
            "to" => "<recipient1>",
            "text" => "<message1>"
        ],
        [
            "from" => "<senderId>",
            "to" => "<recipient2>",
            "text" => "<message2>"
        ],
        [
            "from" => "<senderId>",
            "to" => "<recipient3>",
            "text" => "<message3>"
        ]
    ]
];

// Convert the payload array to JSON
$jsonData = json_encode($data);

// Prepare cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($jsonData)
]);

// Execute the request and fetch response
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    // Print response
    echo $response;
}

// Close the connection
curl_close($ch);
?>
