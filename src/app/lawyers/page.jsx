
import LawyerCard from "@/componenet/shared/LawyerCard";
import { getLawyers } from "@/data/dataFetch";
import { Search, SlidersHorizontal } from "lucide-react";
import Filter from "./Filter";
import { PaginationWithEllipsis, PaginationWithSummary } from "./Pagination";

export default async function Page({
    searchParams
}) {
    const paramsasd = await searchParams;
    //console.log("search params", paramsasd);
    const query = new URLSearchParams(paramsasd);
    // const path =  await fetch(
    //     `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/lawyers?${query}`
    // );
  // later replace with server fetch
  console.log(query, "queryfromget");
  const response = await getLawyers(query);
  let lawyers = [];
  let total = 0;
  if(response.total){
    total = response.total;
    lawyers = response.lawyers;

  }
  else{
    lawyers = response;
  }
  
  console.log(lawyers, "lawyers from page");
        const itemsPerPage = 12;
    const totalPages = Math.ceil(total/ itemsPerPage);

    const totalItems = total;

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-28">

      {/* Header */}

      <div className="text-center mb-12">

        <div className="badge badge-warning badge-lg mb-4">
          Verified Legal Professionals
        </div>

        <h1 className="text-5xl font-black mb-4">
          Browse Lawyers
        </h1>

        <p className="max-w-3xl mx-auto text-base-content/70">
          Find experienced legal professionals across
          multiple specialties. Compare expertise,
          consultation fees and availability before
          making your decision.
        </p>

      </div>

      {/* Filters */}

        <Filter />

      {/* Results Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Available Lawyers
        </h2>

        <p className="text-base-content/60">
          {lawyers.length} Professionals Found
        </p>

      </div>

      {/* Lawyers Grid */}

      {lawyers.length > 0 ? (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {lawyers.map((lawyer) => (

            <LawyerCard
              key={lawyer._id}
              lawyer={lawyer}
            />

          ))}

        </div>
        <div className="my-10">  <PaginationWithSummary 
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
        />  </div>
       
          </>
      ) : (

        <div className="card bg-base-200 border border-warning/20 shadow-xl">

          <div className="card-body text-center py-20">

            <div className="text-6xl mb-4">
              ⚖️
            </div>

            <h3 className="text-2xl font-bold mb-2">
              No Lawyers Found
            </h3>

            <p className="text-base-content/60 max-w-md mx-auto">
              No legal professionals match your
              current search criteria. Try adjusting
              your filters.
            </p>

          </div>

        </div>

      )}

    </div>
  );
};

//export default Page;