"use client";

import {Pagination} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import {useEffect, useState} from "react";

export function PaginationWithSummary({totalPages, itemsPerPage, totalItems}) {
            const router = useRouter();
            const searchParams = useSearchParams();
       const [page, setPage] = useState( Number(searchParams.get("page")) || 1);
        useEffect(() => {
       
               const params =
        new URLSearchParams(searchParams);
       
               if (page)
                   params.set("page", page);
       
               router.push(
                   `/lawyers?${params.toString()}`
               );
       
           }, [page]);
  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <Pagination className="w-full">
      <Pagination.Summary>
        Showing {startItem}-{endItem} of {totalItems} results
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            <Pagination.Item key={`ellipsis-${p+i}`}>
              <Pagination.Ellipsis />
            </Pagination.Item>
          ) : (
            <Pagination.Item key={p+i}>
              <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ),
        )}
        <Pagination.Item>
          <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}