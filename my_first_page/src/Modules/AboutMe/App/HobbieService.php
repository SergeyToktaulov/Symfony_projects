<?php
namespace App\Modules\AboutMe\App;
use App\Modules\AboutMe\Infrastructure\ConstHobbieConfiguration;
use App\Modules\AboutMe\Model\Hobbie;
use App\Modules\AboutMe\Infrastructure\ImageProvider;

class HobbieService
{
    public array $result;

    public function __construct(HobbieConfigurationInterface $hobbieMap, ImageProviderInterface $imageUrls)
    {
        $this->hobbieMap = $hobbieMap->getHobbieMap();
        $this->imageUrls = $imageUrls;
    }

    public function getHobbies(): array
    {
        foreach ($this->hobbieMap as $header) {
            $this->addHobbie($header);
        }
        return $this->result;
    }

    private function addHobbie($name)
    {
        $hobbie = new Hobbie($name, $this->imageUrls->getImageUrls($name));
        $this->result[] = [
            $hobbie->getName(),
            $hobbie->getArrUrls(),
        ];
    }
}