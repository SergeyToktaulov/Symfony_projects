<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\View\AboutMe\AboutMePageView;
use App\Modules\AboutMe\App\HobbieService;
class PageController extends AbstractController
{
    public function aboutMePage(HobbieService $hobbieService)
    {
        $hobbies = $hobbieService->getHobbies();
        $aboutMePage = new AboutMePageView();


        return $this->render('mypage.html.twig',[
            'hobbies' => $aboutMePage->buildParams($hobbies)
        ]);
    }
}