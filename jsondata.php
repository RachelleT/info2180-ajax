<?php
$mydata = [
    'superheroes' => [
        [
            'id' => 1,
            'name' => 'Steve Rogers',
            'alias' => 'Captain America',
            'email' => 'captn@marvel.com'
        ],
        [
            'id' => 2,
            'name' => 'Peter Parker',
            'alias' => 'Spiderman',
            'email' => 'peter.parker@example.com'
        ],
        [
            'id' => 3,
            'name' => 'Anthony Edward "Tony" Stark',
            'alias' => 'Ironman',
            'email' => 'tony.stark@example.com'
        ]
    ]
];

header('Content-Type: application/json');
echo json_encode($mydata);