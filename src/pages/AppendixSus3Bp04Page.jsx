import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP04 — 디바이스 및 장비에 대한 영향 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        아키텍처에서 사용되는 디바이스와 장비를 파악하고 사용을 줄이는 전략을 사용합니다.
        이를 통해 클라우드 워크로드의 전반적인 환경적 영향을 최소화할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        클라우드 워크로드의 전반적인 환경적 영향을 줄입니다. 디바이스 에너지 소비를 최소화하고
        배터리 수명을 연장합니다. 하드웨어 교체 필요성을 줄이고 네트워크를 통한 데이터 전송을 줄입니다.
        구형 디바이스에서의 사용자 경험을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고객이 사용하는 디바이스의 환경적 영향을 무시하는 경우</li>
        <li>고객이 사용하는 리소스를 수동으로 관리하고 업데이트하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>하드웨어 교체 빈도를 줄이는 하위 호환 기능을 통한 환경적 영향 감소</li>
        <li>에너지 소비를 줄이고 배터리 수명을 연장하는 최적화된 애플리케이션</li>
        <li>네트워크 데이터 전송 요구사항 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>아키텍처의 모든 디바이스(모바일, 태블릿, IoT, 스마트 디바이스, 공장 장비)를 인벤토리합니다.</li>
        <li>저전력 모드 전원 관리 구성이 있는 에너지 효율적인 디바이스를 선택합니다.</li>
        <li>백그라운드 작업을 효율적으로 실행하고 네트워크 대역폭·지연 시간을 고려한 페이로드 설계를 적용합니다.</li>
        <li>컴퓨팅 집약적인 활동을 서버 측에서 수행하고 대화형 세션의 출력을 페이지네이션합니다.</li>
        <li>CI/CD 파이프라인을 통한 모바일 앱 업데이트와 AWS IoT Device Management를 사용하여 원격에서 대규모로 디바이스를 관리합니다.</li>
        <li>AWS Device Farm을 사용하여 대표적인 하드웨어에서 테스트합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Elastic Transcoder — 미디어 파일을 디바이스 최적화 형식으로 변환</li>
        <li>AWS Elemental MediaConvert — 미디어 파일 변환 및 최적화</li>
        <li>AWS Device Farm — 관리형 디바이스 테스트 플랫폼</li>
        <li>AWS IoT Device Management — 원격 대규모 디바이스 관리</li>
        <li>AWS AppStream 2.0 — 구형 디바이스를 위한 애플리케이션 스트리밍</li>
        <li>AWS FreeRTOS — OTA 업데이트 기능</li>
      </ul>

      <PageNav />
    </article>
  );
}
