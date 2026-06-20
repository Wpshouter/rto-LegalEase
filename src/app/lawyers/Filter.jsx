'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";

const Filter = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );
     const [page, setPage] = useState(
        searchParams.get("page") ||    1 
    );
    const [specialization, setSpecialization] = useState(
        searchParams.get("specialization") || ""
    );

    const [sort, setSort] = useState(
        searchParams.get("sort") || ""
    );

    useEffect(() => {

          const params =
        new URLSearchParams(searchParams);
         if (page)
            params.set("page", page);

        if (search)
            params.set("search", search);

        if (specialization)
            params.set(
                "specialization",
                specialization
            );

        if (sort)
            params.set("sort", sort);

        router.push(
            `/lawyers?${params.toString()}`
        );

    }, [search, specialization, sort]);

    return (
        <div className="card bg-base-200 border border-warning/20 shadow-xl mb-10">

            <div className="card-body">

                <div className="flex items-center gap-2 mb-4">

                    <SlidersHorizontal
                        size={18}
                        className="text-warning"
                    />

                    <h2 className="font-semibold">
                        Search & Filters
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-4">

                    {/* Search */}

                    <label className="input input-bordered flex items-center gap-2">

                        <Search size={18} />

                        <input
                            type="text"
                            className="grow"
                            placeholder="Search lawyers..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </label>

                    {/* Specialization */}

                    <select
                        className="select select-bordered"
                        value={specialization}
                        onChange={(e) =>
                            setSpecialization(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            All Specializations
                        </option>

                        <option value="Criminal Law">
                            Criminal Law
                        </option>

                        <option value="Family Law">
                            Family Law
                        </option>

                        <option value="Corporate Law">
                            Corporate Law
                        </option>

                        <option value="Property Law">
                            Property Law
                        </option>

                        <option value="Immigration Law">
                            Immigration Law
                        </option>

                        <option value="Employment Law">
                            Employment Law
                        </option>

                        <option value="Tax Law">
                            Tax Law
                        </option>

                    </select>

                    {/* Sort */}

                    <select
                        className="select select-bordered"
                        value={sort}
                        onChange={(e) =>
                            setSort(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Sort By
                        </option>

                        <option value="fee_asc">
                            Fee Low → High
                        </option>

                        <option value="fee_desc">
                            Fee High → Low
                        </option>

                        <option value="name_asc">
                            Name A → Z
                        </option>

                    </select>

                </div>

            </div>

        </div>
    );
};

export default Filter;