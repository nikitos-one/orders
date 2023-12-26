<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    /** Возвращает список клиентов с количеством заказов меньше 1000 руб. и больше 1000 руб
     * @return mixed
     */
    public static function clientsPriceComparison() {
        $data = Client::select('id', 'name')
                      ->withCount(['orders_less_1000', 'orders_more_1000'])
                      ->get();
        return $data;
    }
}
