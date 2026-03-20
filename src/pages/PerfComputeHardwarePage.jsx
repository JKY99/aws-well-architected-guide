import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfComputeHardwarePage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 컴퓨팅 및 하드웨어</h1>

      <p>
        특정 워크로드에 최적의 컴퓨팅 선택은 애플리케이션 설계, 사용 패턴, 구성 설정에 따라 다릅니다.
        아키텍처는 다양한 구성 요소에 서로 다른 컴퓨팅 선택을 사용하고 다양한 기능을 활용하여
        성능을 향상시킬 수 있습니다.
      </p>

      <h2>인스턴스</h2>
      <ul>
        <li>다양한 패밀리와 크기의 가상화 서버</li>
        <li>SSD, GPU 등 포함</li>
        <li>워크로드 특성에 맞게 최적의 인스턴스 패밀리 선택</li>
        <li>범용, 컴퓨팅 최적화, 메모리 최적화, 스토리지 최적화, 가속 컴퓨팅 패밀리 등</li>
      </ul>

      <h2>컨테이너</h2>
      <ul>
        <li>OS 레벨 가상화</li>
        <li>AWS Fargate: 서버리스 컨테이너 실행</li>
        <li>Amazon ECS / Amazon EKS: 오케스트레이션 플랫폼 활용</li>
      </ul>

      <h2>함수 (서버리스)</h2>
      <ul>
        <li>AWS Lambda: 인스턴스를 실행하지 않고 코드 실행</li>
        <li>운영 부담 최소화, 클라우드 규모로 트랜잭션 비용 절감</li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">핵심 고려사항</div>
        <p>
          수요 변화에도 일관된 성능을 유지할 수 있는 컴퓨팅 유형의 최적 조합을 선택하세요.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
