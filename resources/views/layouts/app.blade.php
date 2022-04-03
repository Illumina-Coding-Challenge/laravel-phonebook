<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="host" content="{{ URL::to('') }}">
    <title>Illumina - PhoneBook</title>
    <link href="{{URL::to('css/app.css')}}" rel="stylesheet">
    <link href="{{URL::to('css/scrollbar.css')}}" rel="stylesheet">
    @stack('styles')
</head>

<body class="bg-neutral">

    <div id="alert-warning" class="alert alert-warning shadow-lg fixed bottom-1 right-0 z-10 hidden" role="alert">
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <i class="fa-solid fa-wifi"></i>
            </div>
            <div class="ml-3">
                <p class="font-medium text-sm ">Warning</p>
                <p class="text-sm ">
                    No internet detect.
                </p>
            </div>
        </div>
    </div>

    <div id="alert-error" class="alert alert-error shadow-lg fixed bottom-1 right-0 z-10 hidden" role="alert">
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="font-medium text-sm ">Error</p>
                <p class="text-sm ">
                    Task Failed To Executed.
                </p>
            </div>
        </div>
    </div>

    
    <div id="alert-success" class="alert alert-success shadow-lg fixed bottom-1 right-0 z-10 hidden" role="alert">
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="ml-3">
                <p class="font-medium text-sm ">Success</p>
                <p class="text-sm ">
                    Task Successfully Executed.
                </p>
            </div>
        </div>
    </div>




    @yield('content')




    <script src="https://kit.fontawesome.com/116c15aa0d.js" crossorigin="anonymous"></script>
    <script src="{{URL::to('js/jquery-3.6.0.min.js')}}"></script>
    @stack('scripts')
</body>

</html>