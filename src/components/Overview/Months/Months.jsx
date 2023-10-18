import Month from "./Month/Month";
import "./Months.css";

const Months = () => {
  return (
    <div className="months flex  flex-row " >
        <Month height="h-4/6" bgColor="bg-slate-100" Month='Jan' />
        <Month height="h-2/6" bgColor="bg-slate-100" Month='Fev' />
        <Month height="h-5/6" bgColor="bg-slate-100" Month='Mar' />
        <Month height="h-3/6" bgColor="bg-slate-100" Month='Apr' />
        <Month height="h-2/6" bgColor="bg-slate-100" Month='May' />
        <Month height="h-4/6" bgColor="bg-slate-100" Month='Jun' />
        <Month height="h-5/6" bgColor="bg-purple-500" Month='Jul' />
        <Month height="h-4/6" bgColor="bg-slate-100" Month='Aug' />
        <Month height="h-3/6" bgColor="bg-slate-100" Month='Sep' />
        <Month height="h-2/6" bgColor="bg-slate-100" Month='Oct' />
        <Month height="h-4/6" bgColor="bg-slate-100" Month='Num' />
        <Month height="h-5/6" bgColor="bg-slate-100" Month='Dec' />
    </div>
  )
}

export default Months