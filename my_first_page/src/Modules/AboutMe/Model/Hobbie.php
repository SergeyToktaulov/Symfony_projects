<?php
namespace App\Modules\AboutMe\Model;

class Hobbie
{
    private string $name;
    private array $images = [];

    public function __construct(string $name, array $images)
    {
        $this->name = $name;
        $this->images = $images;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getArrUrls(): array
    {
        return $this->images;
    }
}