"use client"

import { DataTable, type DataTableConfig } from "@/components/admin/data-table"
import { Badge } from "@/components/ui/badge"
import { Order } from "@/types/api"
import { getOrders, deleteOrder, createRequestsForNewOrders, printLabels, printAllLabels, createOrdersForSubscribers, updateShipmentStatuses } from "@/api/orders"
import { formatPrice } from "@/lib/utils"
import { PaginationParams } from "@/types/common/PaginationParams"
import { useState } from "react"
import { JobStatus } from "@/components/job-status";
import { ClipboardCheck, Boxes, Bus, Printer, RefreshCcw } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const fetchOrders = async (params: PaginationParams<keyof Order>) => {

    const result = await getOrders(params);

    return {
        data: result.data,
        total: result.total,
    };
}

export default function AdminOrdersPage() {
    const statusColors = {
        new: "bg-yellow-100 text-yellow-700 border-yellow-300",
        processing: "bg-blue-100 text-blue-700 border-blue-300",
        shipped: "bg-purple-100 text-purple-700 border-purple-300",
        delivered: "bg-green-100 text-green-700 border-green-300",
        cancelled: "bg-red-100 text-red-700 border-red-300",
    }

    const statusLabels = {
        new: "Нов",
        processing: "Обработва се",
        shipped: "Изпратен",
        delivered: "Доставен",
        cancelled: "Отменен",
    }

    const [reloadKey, setReloadKey] = useState(0);
    const [jobId, setJobId] = useState<string | null>(null);
    const [successText, setSuccessText] = useState<string>("Успешно завършено!");
    const [failText, setFailText] = useState<string>("Нещо се обърка.");
    const [pickupDate, setPickupDate] = useState<string | null>(null);
    const [requestsDialogOpen, setRequestsDialogOpen] = useState(false)

    async function createRequests() {
        const jobId = await createRequestsForNewOrders(pickupDate);
        setJobId(jobId);
        setSuccessText("Товарителниците са създадени успешно!");
        setFailText("Възникна грешка при създаването на товарителниците.");
    }


  const handleRequestDialogOpen = () => {
    setRequestsDialogOpen(true)
  }

 const handleUpdateStatuses = async () => {
    const jobId = await updateShipmentStatuses();
        setJobId(jobId);
        setSuccessText("Статусите са обновени успешно!");
        setFailText("Възникна грешка при обновяването на статусите.");
  }

  
  const confirmCreateRequests = async () => {
      try {
        setRequestsDialogOpen(false)
        createRequests();
      } catch (error) {
        console.error("Error deleting item:", error)
      }
  }


    async function CreateOrderFromActiveBoxForSubscribers() {

        const jobId = await createOrdersForSubscribers();
        setJobId(jobId);
        setSuccessText("Поръчките са създадени успешно!");
        setFailText("Възникна грешка при създаването на поръчките.");
    }

    const config: DataTableConfig<Order> = {
        title: "Управление на Поръчки",
        description: "Преглед и управление на всички поръчки",
        columns: [
            {
                key: "orderNumber",
                label: "Номер",
                render: (value) => <span className="font-medium text-[var(--knigarela-text)]">{value}</span>,
            },
             {
                key: "speedyId",
                label: "Номер на товарителница",
                render: (value) => <span className="font-medium text-[var(--knigarela-text)]">{value}</span>,
            },
            {
                key: "clientName",
                label: "Клиент",
                sortable: false,
            },
            {
                key: "address",
                label: "Адрес",
                sortable: false,
            },
            {
                key: "status",
                label: "Статус",
                render: (value: keyof typeof statusLabels) => (
                    <Badge className={statusColors[value]}>{statusLabels[value]}</Badge>
                ),
            },
            {
                key: "totalAmount",
                label: "Общо",
                sortable: false,
                render: (value) => formatPrice(value, true),
            },
            {
                sortable: false,
                key: "date",
                label: "Дата",
                render: (value) => <span className="font-semibold text-[var(--knigarela-pink)]">{value ? new Date(value).toLocaleDateString("bg-BG") : ""}</span>,
            },
        ],
        createUrl: "/admin/orders/create",
        enableEdit:false,
        editUrl: (id) => `/admin/orders/${id}`,
        fetchData: fetchOrders,
        filters: [
            {
                key: "number",
                label: "Номер",
                type: "text",
                placeholder: "Търсене по номер...",
            },
             {
                key: "speedyIdF",
                label: "Номер на товарителница",
                type: "text",
                placeholder: "Търсене по Номер на товарителница...",
            },
            {
                key: "clientName",
                label: "Клиент",
                type: "text",
                placeholder: "Търсене по клиент...",
            },
            {
                key: "status",
                label: "Статус",
                type: "select",
                defaultValue: "all",
                options: [
                    { label: "Всички", value: "all" },
                    { label: "Нов", value: "new" },
                    { label: "Обработват се", value: "processing" },
                    { label: "Изпратен", value: "shipped" },
                    { label: "Доставен", value: "delivered" },
                    { label: "Отменен", value: "cancelled" },
                ],
            },
        ],
        deleteItem: deleteOrder,
        deleteConfirmation: {
            title: "Изтриване на поръчка",
            description: (order) =>
                `Сигурни ли сте, че искате да изтриете поръчка с номер "${order.orderNumber}"? Това действие не може да бъде отменено.`,
        },
        massCustomActions: [
            {
                icon: Boxes,
                onClick: () => CreateOrderFromActiveBoxForSubscribers(),
                label: "Нови поръчки"
            },
            {
                icon: ClipboardCheck,
                onClick: () => handleRequestDialogOpen(),
                label: "Товарителници"
            },{
                icon: RefreshCcw,
                onClick: () => handleUpdateStatuses(),
                label: "Обнови статуси"
            },
            {
                label: "A4",
                icon: Printer,
                onClick: async () => await printAllLabels("A4")
            },
            {
                label: "A6",
                icon: Printer,
                onClick: async () => await printAllLabels("A6")
            }
        ],
        customActions: [
            {
                icon: Printer,
                label: "А4",
                onClick: async (item: any) => await printLabels(item, "A4"),
                variant: "outline"
            },
            {
                icon: Printer,
                label: "А6",
                onClick: async (item: any) => await printLabels(item, "A6"),
                variant: "outline"
            },
        ],
    }

    return <>
        {
            jobId && (
                <div className="p-4">
                    <JobStatus
                        jobId={jobId}
                        statusUrl="/api/order/job-status"
                        successText={successText }
                        failText={failText }
                        onDone={() => setReloadKey(v => v + 1)}
                        onClose={() => setJobId(null)}
                    />
                </div>
            )
        }

        <DataTable config={config} reloadKey={reloadKey} />

        <AlertDialog open={requestsDialogOpen} onOpenChange={setRequestsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{`Създаване на товарителници за поръчките в статус нов`}</AlertDialogTitle>
                <div className="space-y-2">
                            <Label htmlFor="pickupDate" className="text-[var(--knigarela-text)]">
                                Дата на взимане
                            </Label>
                            <Input
                                id="pickupDate"
                                type="date"
                                onChange={(e) => setPickupDate(e.target.value?.slice(0, 10) || "")}
                                className="border-gray-300 resize-none"
                            />
                        </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Отказ</AlertDialogCancel>
              <AlertDialogAction onClick={confirmCreateRequests} className="bg-red-500 text-white hover:bg-red-600">
                Създаване
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </>
}
