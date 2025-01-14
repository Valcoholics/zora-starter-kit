import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { CreateAsk } from './CreateAsk'
import { SetAskPrice } from './SetAskPrice'
import { CancelAsk } from './CancelAsk'
import { FillAsk } from './FillAsk'
import { Dispatch, useState, SetStateAction } from 'react'

interface nftInfo {
    nft: {
        contractAddress: string,
        tokenId: string
    }
}

export default function AskWrite_disclosure(nft) {

    return (
        <div className=" w-full flex flex-row flex-wrap mtext-black">
            <div className=" w-full flex flex-row flex-wrap bg-white ">
                <Disclosure>
                    {({ open }) => (
                    <>
                    <Disclosure.Button className="hover:bg-[#c3f53b] hover:text-black border-2 px-2 bg-black text-white border-white border-solid flex flex-row w-full justify-between py-2 text-left text-lg font-normal ">
                        <span>
                            {"createAsk(tokenContract, tokenId, askPrice, askCurrency, sellerFundsRecipient, findersFeeBps)"}
                        </span>
                        {/* <ChevronUpIcon
                            className={`${
                            open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        /> */}
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-slate-900 border-white border-2 border-solid flex flex-row flex-wrap p-2 text-lg w-full">
                        <div className="w-fit flex flex-row flex-wrap">
                            <CreateAsk nft={nft} />
                        </div>
                    </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                    <>
                    <Disclosure.Button className="hover:bg-[#c3f53b] hover:text-black border-2 px-2 bg-black text-white border-white border-solid flex flex-row w-full justify-between py-2 text-left text-lg font-normal ">
                        <span>
                            {"setAskPrice(tokenContract, tokenId, askPrice, askCurrency)"}
                        </span>
                        {/* <ChevronUpIcon
                            className={`${
                            open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        /> */}
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-slate-900 border-white border-2 border-solid flex flex-row flex-wrap p-2 text-lg w-full">
                        <div className="w-fit flex flex-row flex-wrap">
                            <SetAskPrice nft={nft} />
                        </div>
                    </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                    <>
                    <Disclosure.Button className="hover:bg-[#c3f53b] hover:text-black border-2 px-2 bg-black text-white border-white border-solid flex flex-row flex-wrap w-full justify-between py-2 text-left text-lg font-normal ">
                        <span>
                            {"cancelAsk(tokenContract, tokenId)"}
                        </span>
                        {/* <ChevronUpIcon
                            className={`${
                            open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        /> */}
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-slate-900 border-white border-2 border-solid flex flex-row flex-wrap p-2 text-lg w-full">
                        <div className=" w-fit flex flex-row flex-wrap">
                            <CancelAsk nft={nft} />
                        </div>
                    </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                    <>
                    <Disclosure.Button className="hover:bg-[#c3f53b] hover:text-black border-2 px-2 bg-black text-white border-white border-solid flex flex-row w-full justify-between py-2 text-left text-lg font-normal ">
                        <span>
                            {"fillAsk(tokenContract, tokenId, fillCurrency, fillAmount, finder)"}
                        </span>
                        {/* <ChevronUpIcon
                            className={`${
                            open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        /> */}
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-slate-900 border-white border-2 border-solid flex flex-row flex-wrap p-2 text-lg w-full">
                        <div className="w-fit flex flex-row flex-wrap">
                            <FillAsk nft={nft} />
                        </div>
                    </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>                                                         
            </div>
        </div>
    )
}

// return (
//     <div className=" ml-2 w-full text-black">
//         <div className=" w-full max-w-md bg-white ">
//         <Disclosure>
//             {({ open }) => (
//             <>
//             <Disclosure.Button className="hover:bg-[#c3f53b] hover:text-black border-2 px-2 bg-black text-white border-white border-solid flex flex-row w-full justify-between py-2 text-left text-lg font-normal ">
//                 <span>
//                     {"askForNFT(address, tokenId)"}
//                 </span>
//                 {/* <ChevronUpIcon
//                     className={`${
//                     open ? 'rotate-180 transform' : ''
//                     } h-5 w-5`}
//                 /> */}
//             </Disclosure.Button>
//             <Disclosure.Panel className="bg-[#FFAFC2] px-4 pt-4 pb-2 text-lg">
//                 <div>
//                     <input
//                         className="ml-5 text-black text-center bg-slate-200"
//                         placeholder="contractAddress"
//                         name="askForNFT_contractAddress"
//                         type="text"
//                         value={nft.nft.contractAddress}
//                         onChange={(e) => {
//                             e.preventDefault();
//                             setAsksCB(current => {
//                                 return {
//                                 ...current,
//                                 nft: {
//                                 ...current.nft,
//                                 tokenId: e.target.value
//                                 }}
//                             })
//                         }}
//                         required                              
//                     >
//                     </input>
//                     <input
//                         className="ml-5 text-black text-center bg-slate-200"
//                         placeholder="tokenId"
//                         name="askForNFT_tokenId"
//                         type="text"
//                         value={nft.nft.tokenId}
//                         onChange={(e) => {
//                             e.preventDefault();
//                             setAsksCB(current => {
//                                 return {
//                                 ...current,
//                                 tokenId: e.target.value
//                                 }
//                             })
//                         }}
//                         required                              
//                     >
//                     </input>
//                     <AskForNFT_READ nft={nft} />
//                 </div>
//             </Disclosure.Panel>
//             </>
//             )}
//         </Disclosure>
//         </div>
//     </div>
// )