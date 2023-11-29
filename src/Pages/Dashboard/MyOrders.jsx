import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { jsPDF } from "jspdf";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`myorders/${user?.email}`);
      return res.data;
    },
  });
  const handleDownloadInvoice = (item) => {
    const pdfDoc = new jsPDF("p", "pt");
    // Add a title
    const title = "Invoice";
    pdfDoc.setFontSize(20);
    const textWidth = pdfDoc.getStringUnitWidth(title) * 20;
    const pageWidth = pdfDoc.internal.pageSize.getWidth();
    const xPos = (pageWidth - textWidth) / 2;
    pdfDoc.text(xPos, 40, title);

    // Add a table header
    pdfDoc.setFontSize(12);
    const headers = ["Title :", "Instructor :", "Transaction Id :", "Price :"];
    pdfDoc.text(headers, 20, 80);

    // Add table rows
    const rows = [
      [
        `${item.title}`,
        `${item.name}`,
        `${item.transactionId}`,
        `${item.price}`,
      ],
    ];

    const y = 80;
    rows.forEach((row) => {
      pdfDoc.text(row, 200, y);
      // y += 10;
    });

    const footer = "Thanks for being with Edumi";
    pdfDoc.setFontSize(16);
    const footerTextWidth = pdfDoc.getStringUnitWidth(footer) * 16;
    const footerXPos = (pageWidth - footerTextWidth) / 2;
    pdfDoc.text(footerXPos, 160, footer);
    pdfDoc.save("invoice.pdf");
  };
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Dashboard | My Orders</title>
      </Helmet>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction Id
              </th>

              <th scope="col" className="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((item) => {
                return (
                  <tr
                    key={item._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">
                      <img
                        className="w-12 rounded"
                        src={item.image ? item.image : userIcon}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{item.price} $</td>
                    <td className="px-6 py-4">{item.transactionId}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDownloadInvoice(item)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-blue-200 bg-blue-500 text-white hover:text-blue-500"
                      >
                        Download Invoice
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="px-6 py-4 !w-full text-center odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                No Data yet
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
