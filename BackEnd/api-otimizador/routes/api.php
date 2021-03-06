<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('auth/login', 'AuthController@login')->name('login');;

Route::group(['middleware' => ['apiJwt.refresh']], function () {
    Route::post('auth/refresh', 'AuthController@refresh')->name('refresh');
});
Route::group(['middleware' => ['apiJwt']], function () {

    Route::get('auth/me', 'AuthController@me')->name('me');
    Route::get('auth/logout', 'AuthController@logout')->name('logout');

    // Route::get('auth/logout', 'AuthController@logout');
    // Route::post('auth/refresh', 'AuthController@refresh');
    // Route::get('auth/me', 'AuthController@me');

    Route::get('usuarios', 'UsuarioController@listar')->name('usuarios.listar');
    Route::get('usuarios/todos', 'UsuarioController@listarTodos')->name('usuarios.listarTodos');
    Route::post('usuarios', 'UsuarioController@incluir')->name('usuarios.incluir');
    Route::put('usuarios/{id}', 'UsuarioController@atualizar')->name('usuarios.atualizar');
    Route::delete('usuarios/{id}', 'UsuarioController@excluir')->name('usuarios.excluir');
    Route::get('usuarios/{id}', 'UsuarioController@listarPorId')->name('usuarios.listarPorId');

    //Empresas
    Route::get('empresas', 'EmpresaController@listar')->name('empresas.listar');
    Route::get('empresas/{id}', 'EmpresaController@listarPorId')->name('empresas.listarPorId');
    Route::delete('empresas/{id}', 'EmpresaController@excluir')->name('empresas.excluir');
    Route::post('empresas', 'EmpresaController@incluir')->name('empresas.incluir');
    Route::put('empresas/{id}', 'EmpresaController@atualizar')->name('empresas.atualizar');

    //Controles
    Route::get('controles', 'ControleController@listar')->name('controles.listar');
    Route::get('controles/{id}', 'ControleController@listarPorId')->name('controles.listarPorId');
    Route::get('controles/{id}/editar', 'ControleController@listarControle')->name('controles.listarControle');
    Route::post('controles/incluir', 'ControleController@incluir')->name('controles.incluir');
    Route::put('controles/{idControle}', 'ControleController@atualizar')->name('controles.atualizar');

    //Tipos usuarios
    Route::get('tipos_usuarios', 'TipoUsuarioController@listar')->name('tipos_usuarios.listar');

    //Observações
    Route::get('observacoes/{id}', 'ObservacaoController@listarPorId')->name('observacoes.listarPorId');
    Route::get('observacoes/{idControle}/{mes}', 'ObservacaoController@listarPorMesReferencia')->name('observacoes.listarPorMesReferencia');
    Route::post('observacoes/{idControle}', 'ObservacaoController@incluir')->name('observacoes.incluir');

    //Importador clientes
    Route::group(['prefix' => 'importador/clientes'], function () {
        Route::post('{idEmpresa}/{idLayoutRecebimento}', 'ImportadorClienteController@carregarArquivo')->name('importador.clientes.carregarArquivo');
        Route::get('confrontar/{idEmpresa}', 'ImportadorClienteController@confrontar')->name('importador.clientes.confrontar');
        Route::get('download-clientes-com-erro/{idEmpresa}/{extensao}', 'ImportadorClienteController@baixarArquivoClientesComErro')->name('importador.clientes.download');
        Route::get('gerarArquivoContabilidade/{idEmpresa}', 'ImportadorClienteController@gerarArquivoContabilidade')->name('importador.clientes.gerarArquivoContabilidade');
        Route::get('download-clientes-contabilidade/{idEmpresa}/{extensao}', 'ImportadorClienteController@baixarArquivoClientesContabilidade')->name('importador.clientesok.download');
    });

    // Importador fornecedores
    Route::group(['prefix' => 'importador/fornecedores'], function () {
        Route::post('{idEmpresa}/{idLayoutPagamento}', 'ImportadorFornecedorController@carregarArquivo')->name('importador.fornecedores.carregarArquivo');
        Route::get('confrontar/{idEmpresa}', 'ImportadorFornecedorController@confrontar')->name('importador.fornecedores.confrontar');
        Route::get('download-fornecedores-com-erro/{idEmpresa}/{extensao}', 'ImportadorFornecedorController@baixarArquivoFornecedoresComErro')->name('importador.fornecedores.download');
        Route::get('download-fornecedores-ok/{idEmpresa}/{extensao}', 'ImportadorFornecedorController@baixarArquivoFornecedoresOk')->name('importador.fornecedoresok.download');
        Route::get('gerarArquivoContabilidade/{idEmpresa}', 'ImportadorFornecedorController@gerarArquivoContabilidade')->name('importador.fornecedores.gerarArquivoContabilidade');
        Route::get('download-fornecedores-contabilidade/{idEmpresa}/{extensao}', 'ImportadorFornecedorController@baixarArquivoFornecedoresContabilidade')->name('importador.fornecedoresok.download');
    });

    //Importador cartões
    Route::group(['prefix' => 'importador/cartoes'], function () {
        Route::post('{idEmpresa}', 'ImportadorCartaoController@carregarArquivo')->name('importador.cartoes.carregarArquivo');
        Route::get('gerarArquivoContabilidade/{idEmpresa}', 'ImportadorCartaoController@gerarArquivoContabilidade')->name('importador.cartao.gerarArquivoContabilidade');
        Route::get('download-cartao/{idEmpresa}/{extensao}', 'ImportadorCartaoController@baixarArquivoCartao')->name('importador.cartoes.download');
    });

    //Relatorios
    Route::group(['prefix' => 'relatorios/controle'], function () {
        Route::get('relatorio-geral', 'Relatorios\Controle\RelatorioGeralController@listarGeral')->name('relatorio-geral.listarGeral');
    });

    //Layouts
    Route::group(['prefix' => 'layouts'], function () {
            //Pagamentos
            Route::get('layouts-pagamentos/{idEmpresa}', 'Layouts\LayoutPagamentoController@listaLayoutPagamentos')->name('layouts-pagamento.listaLayoutPagamentos');
            Route::get('layouts-pagamento/{idLayoutPagamento}', 'Layouts\LayoutPagamentoController@listaLayoutPagamento')->name('layouts-pagamento.listaLayoutPagamento');
            Route::put('layouts-pagamento/{idLayoutPagamento}', 'Layouts\LayoutPagamentoController@atualizaLayoutPagamento')->name('layouts-pagamento.atualizaLayoutPagamento');
            Route::post('layouts-pagamento/{idEmpresa}', 'Layouts\LayoutPagamentoController@incluiLayoutPagamento')->name('layouts-pagamento.incluiLayoutPagamento');
            //Recebimentos
            Route::get('layouts-recebimentos/{idEmpresa}', 'Layouts\LayoutRecebimentoController@listaLayoutRecebimentos')->name('layouts-recebimento.listaLayoutRecebimentos');
            Route::get('layouts-recebimento/{idLayoutRecebimento}', 'Layouts\LayoutRecebimentoController@listaLayoutRecebimento')->name('layouts-recebimento.listaLayoutRecebimento');
            Route::put('layouts-recebimento/{idLayoutRecebimento}', 'Layouts\LayoutRecebimentoController@atualizaLayoutRecebimento')->name('layouts-recebimento.atualizaLayoutRecebimento');
            Route::post('layouts-recebimento/{idEmpresa}', 'Layouts\LayoutRecebimentoController@incluiLayoutRecebimento')->name('layouts-recebimento.incluiLayoutRecebimento');
    });

    //Logs
    Route::group(['prefix' => 'logs'], function () {
        Route::get('logs', 'LogController@index')->name('logs.index');
    });

});

