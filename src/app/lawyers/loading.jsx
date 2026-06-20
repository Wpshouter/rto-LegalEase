export default function Loading() {

  return (
    <div className="max-w-7xl mx-auto px-6 py-28">

      <div className="skeleton h-16 w-96 mx-auto mb-12" />

      <div className="skeleton h-32 w-full mb-10" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, i) => (

          <div
            key={i}
            className="card bg-base-200"
          >
            <div className="skeleton h-64 w-full" />

            <div className="card-body">

              <div className="skeleton h-5 w-40" />

              <div className="skeleton h-4 w-full" />

              <div className="skeleton h-4 w-3/4" />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}