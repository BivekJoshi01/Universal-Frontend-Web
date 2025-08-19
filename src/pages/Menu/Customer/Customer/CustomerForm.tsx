import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RenderInput, {
    InputField,
} from "../../../../components/RenderInput/RenderInput";
import { FiCamera } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useAddCustomerHook } from "../../../../api/customerSupplier/customer/customer-hook";

const validationSchema = yup.object().shape({
    // areaDetail: yup.string().required("Area Detail is required"),
    // areaShortName: yup.string().required("Area Short name is required"),
});

const inputFields: InputField[] = [
    {
        name: "customerDetail",
        type: "text",
        placeholder: "Enter customer name",
        label: "Customer Name",
        required: true,
        gridClass: "col-span-4",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        label: "Email",
        required: true,
        gridClass: "col-span-2",
    },
    {
        name: "phoneNumber",
        type: "text",
        placeholder: "Enter phone number",
        label: "Phone Number",
        required: true,
        gridClass: "col-span-2",
    },
    {
        name: "street",
        type: "text",
        placeholder: "Enter street",
        label: "Street",
        required: true,
        gridClass: "col-span-2",
    },
    {
        name: "city",
        type: "text",
        placeholder: "Enter city",
        label: "City",
        required: true,
        gridClass: "col-span-2",
    },
    {
        name: "country",
        type: "text",
        placeholder: "Enter country",
        label: "Country",
        required: true,
        gridClass: "col-span-4",
    },

    {
        name: "isRetailer",
        type: "checkbox",
        label: "Is Retailer?",
        required: false,
        gridClass: "col-span-4",
    },
    {
        name: "contactPerson",
        type: "text",
        placeholder: "Enter contact person",
        label: "Contact Person",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "vatPan",
        type: "text",
        placeholder: "Enter VAT/PAN",
        label: "VAT/PAN",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "areaId",
        type: "autoCompleteSelectGetRequestField",
        apiPath: "api/core/area/getAll",
        optionLabel: "areaShortName",
        optionValue: "_id",
        placeholder: "Select area",
        label: "Area",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "agentId",
        type: "autoCompleteSelectGetRequestField",
        apiPath: "api/core/agent/getAll",
        optionLabel: "agentDetail",
        optionValue: "_id",
        placeholder: "Select area",
        label: "Agent",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "creditLimit",
        type: "number",
        placeholder: "Enter credit limit",
        label: "Credit Limit",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "type",
        type: "text",
        placeholder: "Enter type",
        label: "Customer Type",
        required: true,
        gridClass: "col-span-1",
    },
    {
        name: "memo",
        type: "text",
        placeholder: "Enter memo",
        label: "Memo",
        required: false,
        gridClass: "col-span-1",
    },
    {
        name: "isActive",
        type: "checkbox",
        label: "Is Active?",
        required: false,
        gridClass: "col-span-1",
    },
];

interface ProductCompantFormProps {
    onClose: () => void;
}

const CustomerForm: React.FC<ProductCompantFormProps> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { mutate } = useAddCustomerHook();

    const onSubmit = (data: object) => {
        mutate(
            { formData: data },
            {
                onSuccess: () => onClose(),
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 md:grid-cols-4"
        >
            <RenderInput
                inputFields={inputFields}
                register={register}
                errors={errors}
                control={control}
            />

            <div className="col-span-2 md:col-span-4 flex justify-between items-center border-t pt-2 border-stone-300">
                <button
                    className="flex text-sm items-center gap-2 bg-red-300 transition-colors hover:bg-red-400 px-3 py-1.5 rounded"
                    onClick={onClose}
                >
                    <IoClose /> <span>Close</span>
                </button>
                <button
                    className="flex text-sm items-center gap-2 bg-green-300 transition-colors hover:bg-green-400 px-3 py-1.5 rounded"
                    type="submit"
                >
                    <FiCamera /> <span>Submit</span>
                </button>
            </div>
        </form>
    );
};

export default CustomerForm;
