<?php
namespace App\Modules\AboutMe\Infrastructure;
use App\Modules\AboutMe\App\HobbieConfigurationInterface;

class ConstHobbieConfiguration implements HobbieConfigurationInterface
{
    public function getHobbieMap(): array
    {
        return ['CS:GO', 'Camping', 'Dogs'];
    }
}