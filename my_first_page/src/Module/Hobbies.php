<?php
namespace App\Module;
use IvanUskov\ImageSpider\ImageSpider;

class Hobbies
{
    private array $images;

    public function setTopic(string $theme)
    {
        $this->theme = $theme;
    }

    public function getUrls()
    {
        $this->urls = ImageSpider::find($this->theme);
    }

    public function getArrayUrls(): array
    {
        $this->getUrls();
        for ($i=0; $i < 5; $i++)
        {
            $images[] = $this->urls[mt_rand(0, count($this->urls) - 1)];
        }
        return $images;
    }

    public function addData()
    {
        $this->topic[] = [
            'header' => $this->theme,
            'images' => $this->getArrayUrls()
        ];
    }

    public function Hobbies()
    {
        return $this->topic;
    }
}
