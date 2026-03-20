import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP06 — 버퍼링 또는 스로틀링으로 수요 곡선 평탄화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        버퍼링과 스로틀링으로 수요 곡선을 평탄화하여 워크로드에 필요한 프로비저닝 용량을 줄입니다.
        클라이언트 요청을 즉시 처리하는 대신 이러한 기술로 수요 피크를 완화하여 더 적은 용량을
        프로비저닝하고 에너지를 덜 소비할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        프로비저닝 용량 요구사항을 줄이고 에너지 소비를 낮추며 환경적 영향을 최소화합니다.
        리소스 활용을 최적화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>즉시 처리가 필요하지 않은 경우에도 클라이언트 요청을 즉시 처리하는 경우</li>
        <li>클라이언트 요청의 요구사항을 분석하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요 곡선 평탄화로 워크로드에 필요한 프로비저닝 용량 감소</li>
        <li>에너지 소비 감소 및 환경적 영향 최소화</li>
        <li>비동기 처리를 통한 시스템 복원력 및 확장성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>클라이언트 요청을 분석하여 비동기 처리 가능 여부와 재시도 가능 여부를 파악합니다.</li>
        <li>재시도 가능한 클라이언트에는 Amazon API Gateway를 사용하여 스로틀링을 구현합니다(서비스가 즉시 처리할 수 없는 경우 나중에 재시도 지시).</li>
        <li>재시도가 불가능한 클라이언트에는 Amazon SQS 큐를 사용하여 요청을 버퍼링하고 비즈니스 요구사항에 맞는 속도로 처리합니다.</li>
        <li>다수의 소비자가 동일한 메시지를 읽어야 하는 경우 Amazon Kinesis를 활용합니다.</li>
        <li>전체 수요, 변화율, 필요한 응답 시간을 분석하여 스로틀 또는 버퍼의 적정 규모를 설정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway — API 스로틀링 정책 구현</li>
        <li>Amazon SQS — 단일 소비자를 위한 메시지 큐 기반 요청 버퍼링</li>
        <li>Amazon Kinesis — 다중 소비자가 동일 메시지를 읽는 경우의 스트리밍</li>
      </ul>

      <PageNav />
    </article>
  );
}
