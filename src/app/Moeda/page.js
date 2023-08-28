import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

// Dados simulados para a tabela (substitua por seus próprios dados)
const moedas = [
    { nome: 'Dólar', codigo: 'USD', valor: 5.45, imagemUrl: '/caminho/para/imagem1.jpg' },
    { nome: 'Euro', codigo: 'EUR', valor: 6.42, imagemUrl: '/caminho/para/imagem2.jpg' },
    // Adicione mais moedas aqui
];

export default function Moeda() {
    return (
        <>
            <NavBar />

            <main className="bg-slate-900 p-11 m-10 rounded flex justify-center items-center">
                <div className="bg-slate-100 p-11 m-10 rounded ">
                    
                    <h2 className="text-2xl font-semibold mb-4 "> Moedas</h2>
                    
                    <button type="submit" className="">Adicionar Moeda</button>
                    <table className="table">
                        <thead>
                            <tr className='flex justify-center'>
                                <th className=''></th>
                                <th className=''>Nome</th>
                                <th className=''>Código</th>
                                <th className=''>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moedas.map((moeda, index) => (
                                <tr key={index}>
                                    <td><Image src={moeda.imagemUrl} width={30} height={30} alt={`${moeda.nome} Logo`} /></td>
                                    <td>{moeda.nome}</td>
                                    <td>{moeda.codigo}</td>
                                    <td>{moeda.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
