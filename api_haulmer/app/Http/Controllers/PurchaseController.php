<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Faker\Factory;

class PurchaseController extends Controller
{
    public function postPurchase($id,$client_id,$client_name)
    {
        // Crear instancia del cliente HTTP
        $client = new Client();
        $faker = Factory::create();


        $data = [
            'id' => $faker->uuid, // Genera un UUID único
            'createdAt' => $faker->date('Y-m-d H:i:s'), // Genera una fecha aleatoria reciente
            'Event_id' => $id, // Genera una palabra aleatoria
            'Client_id' => $client_id, // Genera un número entero aleatorio positivo de hasta 5 dígitos
            'Client_name' => $client_name // Genera una palabra aleatoria
        ];
        // Realizar la solicitud POST
        $response = $client->request('POST', 'https://662fd2c943b6a7dce310dc1c.mockapi.io/Purchases', [
            'json' => $data // Envía los datos como JSON en el cuerpo de la solicitud
        ]);

        // Decodificar la respuesta JSON
        return json_decode($response->getBody()->getContents(), true);

    }

    public function getOrders($id){
        $client = new Client();
        $response = $client->request('GET', 'https://662fd2c943b6a7dce310dc1c.mockapi.io/Purchases');
        $data = json_decode($response->getBody()->getContents(), true);

        // Convertir el array en una colección de Laravel
        $purchases = collect($data);

        // Filtrar las compras por el "Client_id" deseado
        $filteredPurchases = $purchases->filter(function ($purchase) use ($id) {
            return $purchase['Client_id'] == $id;
        });

        return $filteredPurchases->toJson();
    }
}
