import Image from 'next/image'
import NavBar from '@/components/NavBar'
export default function conversor() {
  return (
    <>


      <NavBar />



      <main className="bg-slate-900 p-9 m-6 rounded  flex justify-center items-center">

        <div className="bg-slate-100 p-11 m-10 rounded">


          <form>
            <h2>Conversor </h2>
            
            <div className="form-group">
              <label htmlFor="Moeda">Moeda</label>
              <input type="text" id="Moeda" name="Moeda" />
              <button type="submit">Select</button>
            </div>
            <div className="form-group">
              <label htmlFor="email">Valor em Real</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <button type="submit">cancelar</button>
              <button type="submit">salvar</button>
              <div className="form-group">
              <label htmlFor="email">Valor da conversão</label>
              <input type="email" id="email" name="email" />
            </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}