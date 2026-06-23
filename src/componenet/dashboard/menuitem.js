export const dashboardMenus = {
  admin: [
    {
      label: "Overview",
      href: "/dashboard/admin",
    },
    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
    },
    {
      label: "Manage Lawyers",
      href: "/dashboard/admin/manage-lawyers",
    },
    {
      label: "Transactions",
      href: "/dashboard/admin/transactions",
    },
  ],

  lawyer: [
    {
      label: "Overview",
      href: "/dashboard/lawyer",
    },
    {
      label: "Manage Legal Profile",
      href: "/dashboard/lawyer/manage-legal-profile",
    },
    {
      label: "Hiring Requests",
      href: "/dashboard/lawyer/hiring-history",
    },
    {
      label: "Payment History",
      href: "/dashboard/lawyer/payments",
    },
  ],

  client: [
    {
      label: "Overview",
      href: "/dashboard/user",
    },
    {
      label: "My Hires",
      href: "/dashboard/user/hiring-requests",
    },
    {
      label: "Payment History",
      href: "/dashboard/user/payments",
    },
    {
      label: "Comments",
      href: "/dashboard/user/comments",
    },
  ],
};