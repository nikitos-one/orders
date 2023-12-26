<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['subject', 'body', 'article_id'];

    public $timestamps = false;

    public function client() {
        return $this->belongsTo(Client::class);
    }
}
