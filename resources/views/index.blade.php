@extends('layouts.app')

@push('styles')

@endpush

@section('content')

<div class="h-screen">
    <div class="grid grid-cols-3 gap-4 p-2 h-full">
       
            <div class="card lg:card-side bg-base-100 shadow-xl h-full">
                <div class="card-body h-full">
                    <div class="grid grid-rows-6 h-full">
                        <div class="row-span-1">
                            <label class="relative block">
                                <i class="fa-solid fa-magnifying-glass pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3"></i>
                                
                                <input id="searchContact" type="text" placeholder="Search contacts" class="input input-bordered w-full pl-12"
                                    value="">
        
                            </label>
                            <div class="text-center">
                                <button id="create-contact" data-toggle="open-modal" data-target="#modalCreateContact" class="btn btn-ghost"><i
                                    class="fa-solid fa-user-plus text-center"></i>&nbsp;&nbsp;Create new contact</button>
                            </div>
                        </div>
                       
                        <div id="contentContacts" class="row-span-5 overflow-y-scroll scroll-dark text-center"></div>
                    </div>
                   

                    <!-- Put this part before </body> tag -->
                    <div class="modal" id="modalCreateContact">
                        <div class="modal-box">
                            <button data-toggle="close-modal" data-target="#modalCreateContact"
                                class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                            <h3 class="font-bold text-lg pb-5">Contact</h3>

                            <form class="needs-validation" id="addContactForm">
                                <input type="hidden" id="edit-contact" name="id_contact">
                                <div class="py-2 flex">
                                    <div class="flex-none px-2 grid grid-cols-1 place-content-center">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <div class="grow">
                                        <input id="name" type="text" name="name" placeholder="Name"
                                            class="input input-bordered w-full">
                                    </div>
                                </div>

                                <div class="py-2 flex">
                                    <div class="flex-none px-2 grid grid-cols-1 place-content-center">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div class="grow">
                                        <input id="phone" type="text" name="phone" placeholder="Phone Number"
                                            class="input input-bordered w-full" required>
                                    </div>
                                </div>

                                <div class="py-2 flex">
                                    <div class="flex-none px-2 grid grid-cols-1 place-content-center">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div class="grow">
                                        <input id="address" type="text" name="address" placeholder="Address"
                                            class="input input-bordered w-full" required>
                                    </div>

                                </div>

                                <div class="modal-action">
                                    <button data-toggle="close-modal" data-target="#modalCreateContact"
                                        class="btn btn-error text-white">Cancel</button>
                                    <button type="submit" class="btn" id="btn-add-contact">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <!-- Put this part before </body> tag -->
                    <div class="modal" id="modalDeleteContact">
                        <div class="modal-box">
                            <button data-toggle="close-modal" data-target="#modalDeleteContact"
                                class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                            <h3 class="font-bold text-lg pb-5">Delete Contact</h3>

                            <p>Are you sure?</p>
                            <input type="hidden" id="delete-contact" name="id_contact">

                            <div class="modal-action">
                                <button data-toggle="close-modal" data-target="#modalDeleteContact"
                                    class="btn btn-error text-white">Cancel</button>
                                <button type="submit" class="btn" id="btn-delete-contact">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="col-span-2 h-full">
            <div class="card lg:card-side bg-base-100 shadow-xl h-full ">
                <div class="card-body overflow-y-scroll scroll-dark">
                    <div id="info-contact" class="h-full w-full grid grid-cols-1 place-content-center justify-items-center">
                        <i class="fa-solid fa-address-book fa-5x py-3"></i>
                        <p>No contact selected</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@push('scripts')
<script type="module" src="{{URL::to('js/model/contact.js')}}"></script>
<script type="module" src="{{URL::to('js/model/contactList.js')}}"></script>
<script type="module" src="{{URL::to('js/init.js')}}"></script>
<script type="module" src="{{URL::to('js/controller/contact/addEditContact.js')}}"></script>
<script type="module" src="{{URL::to('js/controller/contact/deleteContact.js')}}"></script>
<script type="module" src="{{URL::to('js/controller/contact/getContacts.js')}}"></script>
<script type="module" src="{{URL::to('js/controller/contact/searchContact.js')}}"></script>

@endpush