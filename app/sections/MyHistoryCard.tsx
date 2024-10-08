import { Card, CardBody,CardHeader,CardProps } from "@nextui-org/card"

const MyHistoryCard = () => {
  return (
    <section >
      <div>
        <Card />
      </div>
      <div className="p-2 rounded-3xl opacity- shadow-xl shadow-black items-center justify-center">
        <div className="bg-gradient-to-b from-blue-300 to-blue-900 shadow-2xl shadow-black min-h-[1000px] min-w-2 rounded-2xl max-h-[1000px] max-w-3 " >
          <div id="History Points" className={`dark:bg-white rounded-full bg-slate-900`}/>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default MyHistoryCard