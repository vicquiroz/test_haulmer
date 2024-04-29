<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class EventController extends Controller
{
    public function getAllEvents()
    {
        $client = new Client();
        $response = $client->request('GET', 'https://662fd2c943b6a7dce310dc1c.mockapi.io/Events'); // Reemplaza esto con la URL de tu MockAPI

        return json_decode($response->getBody()->getContents(), true);
    }

    public function getEvent($id)
    {
        $client = new Client();
        $response = $client->request('GET', 'https://662fd2c943b6a7dce310dc1c.mockapi.io/Events/' . $id); // Reemplaza esto con la URL de tu MockAPI y el ID del evento

        return json_decode($response->getBody()->getContents(), true);
    }
}
