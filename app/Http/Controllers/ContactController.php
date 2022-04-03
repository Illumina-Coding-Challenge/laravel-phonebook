<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 1. Get contact and order by name
        $contacts = Contact::orderBy('name')->get();

        // 2. Response data 
        $data = [
            'status' => 'success', 
            'message' => 'Successfully fetch contact',
            'data' => $contacts
        ];

        // 3. Return response
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1. Validate request
        $validator = Validator::make($request->all(), [
            'name'             => 'required',
            'phone'            => 'required',
            'address'            => 'required',
        ]);

        // 2. Check if validation fails
        if($validator->fails()){
            $data = [
                'status' => 'validation error', 
                'message' => $validator->messages() ,
            ];
            return response()->json($data);
        }

        // 3. Create new contact
        $contact = new Contact([
            'name'             => $request->get('name'),
            'phone'            => $request->get('phone'),
            'address'            => $request->get('address'),
        ]);

        // 4. Save contact
        $contact->save();

        // 5. Response data
        $data = [
            'status' => 'success', 
            'message' => 'Successfully create contact'
        ];

        // 6. Return response
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        // 1. Validate request
        $request->validate([
            'name'             => 'required',
            'phone'            => 'required',
            'address'            => 'required',
        ]);

        // 2. Update contact
        $contact->update([
            'name'             => $request->get('name'),
            'phone'            => $request->get('phone'),
            'address'            => $request->get('address'),
        ]);

        // 3. Response data
        $data = [
            'status' => 'success', 
            'message' => 'Successfully update contact',
            'data' => $contact
        ];

        // 4. Return response
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        // 1. Delete contact
        $contact->delete();

        // 2. Response data
        $data = [
            'status' => 'success', 
            'message' => 'Successfully delete contact'
        ];

        // 3. Return response
        return response()->json($data);
    }
}
