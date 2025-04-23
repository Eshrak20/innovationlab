<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'email' => 'required|email|unique:forms,email',
            'description' => 'required|string',
        ]);

        Form::create($validated);

        return redirect()->back()->with('success', 'Form submitted successfully!');
    }

    public function index()
    {
        $forms = Form::all();
        return Inertia::render('Admin/Forms/Forms', [
            'forms' => $forms,
        ]);
    }
    public function edit($id)
    {
        $form = Form::findOrFail($id);
        return Inertia::render('Admin/Forms/Edit', [
            'form' => $form,
        ]);
    }

    public function update(Request $request, $id)
    {
        $form = Form::findOrFail($id);

        $validated = $request->validate([
            'is_read' => 'sometimes|boolean'
        ]);

        $form->update($validated);

        return redirect()->route('forms.index')->with('success', 'Form updated successfully!');
    }


    public function destroy($id)
    {
        $form = Form::findOrFail($id);
        $form->delete();

        return response()->json(['message' => 'Form deleted successfully']);
    }
}
