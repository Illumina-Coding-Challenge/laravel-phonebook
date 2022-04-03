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
        $contacts = Contact::orderBy('name')->get();

        $data = [
            'status' => 'success', 
            'message' => 'Successfully fetch contact',
            'data' => $contacts
        ];

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'required',
            'phone'            => 'required',
            'address'            => 'required',
        ]);

        if($validator->fails()){
            $data = [
                'status' => 'validation error', 
                'message' => $validator->messages() ,
            ];
            return response()->json($data);
        }

        $contact = new Contact([
            'name'             => $request->get('name'),
            'phone'            => $request->get('phone'),
            'address'            => $request->get('address'),
        ]);

        $contact->save();

        $data = [
            'status' => 'success', 
            'message' => 'Successfully create contact'
        ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $request->validate([
            'name'             => 'required',
            'phone'            => 'required',
            'address'            => 'required',
        ]);

        $contact->update([
            'name'             => $request->get('name'),
            'phone'            => $request->get('phone'),
            'address'            => $request->get('address'),
        ]);

        $data = [
            'status' => 'success', 
            'message' => 'Successfully update contact',
            'data' => $contact
        ];

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
        $contact->delete();

        $data = [
            'status' => 'success', 
            'message' => 'Successfully delete contact'
        ];

        return response()->json($data);
    }
}
