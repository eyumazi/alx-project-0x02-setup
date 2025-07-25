import type { ModalProps } from "@/interfaces";
export const Modal:React.FC<ModalProps> = ({isopen, onClose, children}) =>
{
   if(!isopen)
   {
      return null;
   }
   return (
     <>
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
         <div className="bg-white p-6 rounded-lg w-[400px] relative shadow-lg">
           <button
             onClick={onClose}
             className="absolute top-2 right-2 text-gray-700 hover:text-black"
           >
             ✕
           </button>
           {children}
         </div>
       </div>
     </>
   );
}