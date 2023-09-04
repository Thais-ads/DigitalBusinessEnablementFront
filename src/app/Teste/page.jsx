import Image from 'next/image'
import NavBar from '@/components/NavBar'

import {create} from '@/actions/teste'
export default function teste() {
  return (
    <>


      <NavBar />



      <main className="bg-slate-900 p-11 m-10 rounded flex justify-center items-center">

        <div className="bg-slate-100 p-11 m-10 rounded">


          <form action={create}>
            <h2> Login </h2>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
           
              <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="senha" id="senha" name="senha" />
              <button type="submit">Entrar</button>
            </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}