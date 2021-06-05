<?php
namespace App\View\AboutMe;

class AboutMePageView
{
    private array $hobbies = [];
    private array $result = [];

    public function buildParams($hobbies): array
    {
        foreach ($hobbies as $hobbie)
        {
            $result[] = $hobbie;
        }
        return $result;
    }
}