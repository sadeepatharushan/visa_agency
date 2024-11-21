import { columns } from "@/components/dashboard/columns"
import { DataTable } from "@/components/dashboard/data-table"

const data= [
  {
    id: "728ed52f",
    name: "visura",
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    name: "visura",
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]

const consultations = () => {
  return (
    <div className=" container mx-auto p-10">
      <div className="bg-slate-50 px-4 rounded-md">
      <DataTable columns={columns} data={data} />
      </div>
      
    </div>
  )
}

export default consultations