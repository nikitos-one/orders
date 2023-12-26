<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public $timestamps = false;

    public function orders() {
        return $this->hasMany(Order::class);
    }

    /** Возвращает заказы ценой меньше 1000 руб.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders_less_1000()
    {
        return $this->hasMany(Order::class)
                    ->where('price', '<', 1000);
    }

    /** Возвращает заказы ценой больше или равно 1000 руб.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders_more_1000()
    {
        return $this->hasMany(Order::class)
                    ->where('price', '>=', 1000);
    }
}
