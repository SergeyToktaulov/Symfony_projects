<?php
namespace App\Modules\AboutMe\App;

interface  ImageProviderInterface
{
    public function getImageUrls(string $name): array;
}