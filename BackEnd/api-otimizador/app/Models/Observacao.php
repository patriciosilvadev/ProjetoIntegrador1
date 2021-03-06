<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Observacao extends Model
{
    use SoftDeletes;
    use LogsActivity;

    protected $table = "observacoes";
    // protected $primaryKey = ["mes_referencia", "controle_id"];
    protected $keyType = 'string';

    protected $fillable = [
        'observacao',
        'mes_referencia',
        'controle_id',
        'estado',
    ];

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    //Sistema de log
    protected static $logAttributes = [ '*' ];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;

    public function controles() {
        return $this->hasOne('App\Models\Controle', 'id_controle', 'controle_id');
    }

    protected function setKeysForSaveQuery(Builder $query)
    {
        return $query->where('controle_id', $this->getAttribute('controle_id'))
            ->where('mes_referencia', $this->getAttribute('mes_referencia'));
    }
}
